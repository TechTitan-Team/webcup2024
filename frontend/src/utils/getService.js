const getService = (type) => {
  switch (type) {
    case "lieux":
      return "Location de lieux";
    case "traiteur":
      return "Services traiteur";
    case "divertissements":
      return "Animations et divertissements";
    case "conciergerie":
      return "Services de conciergerie";
    case "decoration":
      return "Services de décoration";
    case "photographie":
      return "Services de photographie";
    default:
      return "Services de photographie";
  }
};
export default getService;
