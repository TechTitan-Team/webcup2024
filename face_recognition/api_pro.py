import cv2
import face_recognition
import os
from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin
import shutil
from PIL import Image
import re
from flask_sslify import SSLify

app = Flask(__name__)
cors = CORS(app)
sslify = SSLify(app)
dataset = "dataset"
if not os.path.exists(dataset):
    os.makedirs(dataset)

trash = "trash"
if not os.path.exists(trash):
        os.makedirs(trash)

@app.route('/delete-dataset', methods=['DELETE'])
def delDataset():
    if 'name' not in request.form:
        return jsonify({'error': 'No name selected'}), 400
    name = request.form['name']
    if not os.path.exists(os.path.join(dataset, name+".jpg")):
        return jsonify({'error': 'Model not found'}), 400
    else:
        os.remove(os.path.join(dataset, name+".jpg"))
        return "Model supprimé"

@app.route('/create-dataset', methods=['POST'])
def createDataset():
    if 'img' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    if 'name' not in request.form:
        return jsonify({'error': 'No name selected'}), 400
    img = request.files['img']
    name = request.form['name']
    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    image = Image.open(img)
    print(img.filename)
    try:
        image.save(os.path.join(trash, img.filename))
        img_data = face_recognition.load_image_file(os.path.join(trash, '{}'.format(img.filename)))
        rgb_img = cv2.cvtColor(img_data, cv2.COLOR_BGR2RGB)
        face_recognition.face_encodings(rgb_img)[0]
        cv2.imwrite(os.path.join(dataset, '{}.jpg'.format(name)), rgb_img)
        return "Image enregistré"
    except:
        return jsonify({'error': 'Image non acceptée'}), 400

@app.route('/recognize', methods=['POST'])
def recognize():
    if 'img' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    img = request.files['img']
    print(img)
    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    image = Image.open(img)
    try:
        image.save(os.path.join(trash, img.filename))
        data_img = cv2.imread(os.path.join(trash, '{}'.format(img.filename)))
        modelPath = [os.path.join(dataset,f) for f in os.listdir(dataset)]
        rgb_img = cv2.cvtColor(data_img, cv2.COLOR_BGR2RGB)
        for f in modelPath:
            image = cv2.imread(f)
            model = face_recognition.face_encodings(image)[0]
            data = face_recognition.face_encodings(rgb_img)[0]
            result = face_recognition.compare_faces([data], model)
            if result[0]:
                filename_without_extension = re.sub(r'\.jpg$', '', f.split('/')[1])
                return filename_without_extension
            else:
                pass
        return jsonify({'error': 'Model not found'}), 400
    except:
        print("face not found")
        return jsonify({'error': 'Face not found'}), 400

    
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=6000)