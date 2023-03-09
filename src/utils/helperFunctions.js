export const validateEmail = email => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const validateEmptyInputs = array => {
  let allValid = true;
  let apiData = {};
  array?.forEach(element => {
    let newKey;
    for (let keys in element) {
      if (keys !== 'label') {
        newKey = keys;
      }
    }
    if (
      !element[newKey] ||
      (typeof element[newKey] === 'string' && element[newKey]?.trim() === '')
    ) {
      allValid = false;
      throw new Error(`Please Enter ${element?.label}`);
    } else if (newKey === 'email' && !validateEmail(element[newKey])) {
      throw new Error('Enter Valid Email Address');
    } else {
      apiData[newKey] = element[newKey];
    }
  });
  if (allValid) {
    return apiData;
  }
};
