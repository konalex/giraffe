export function get(type, query) {
  switch (type) {
    case "users":
      return users(query);
    case "products":
      return products();
    default:
      return [];
  }
}

async function users(query) {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users" + (query ? '?' + query : ''));
		return response.json();
	}
	catch(error) {
		return [];
	}
}

async function products() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}


export function sortByKey(array, key) {
	let callback;
	switch (typeof array[0][key]) {
		case 'number':
			callback = (a , b) => a[key] - b[key];
			break;
		case 'string':
			callback = (a , b) => a[key].length - b[key].length;
			break;
		default:
			callback = Boolean;
			break;
	}
	return array.sort(callback);
}