// Api
import {key} from "./key";
import {urlProducts, urlProductsOrigins} from "./urls";

export const fetchProductsOrigins = async () => {
  const response = await fetch(urlProductsOrigins);
  const data = await response.json();
  return data;
};

export const fetchProducts = async filter => {
  localStorage.setItem('dataFromLocalStorage', JSON.stringify(filter));
  const editable = window.location.pathname.indexOf('favorites') === 1;
  const filters = Object.keys(filter).map(key => key !== 'reload' && key + '=' + filter[key]).join('&');
  const queryString = `?${filters}&editable=${editable}`;
  const response = await fetch(
      urlProducts + queryString, {
        headers: {
          'Authorization': key
        }
      }
  );
  const data = await response.json();
  return data;
};