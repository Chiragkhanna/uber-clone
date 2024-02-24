export const toTitleCase = (...str: any[]) => {
    let newstr = str.join(" ");
    return newstr.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };