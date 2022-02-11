import inital_meals from "../meals/mealData";
function loadData(params) {
  //
}

function saveData(url, errorCallBack, loadingFn) {
  loadingFn();

  fetch(url, {
    method: "POST",
    body: JSON.stringify(inital_meals),
  })
    .catch(function (error) {
      loadingFn();
      errorCallBack();
      console.log(error);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      alert("Success");
      loadingFn();
      console.log(data);
    });
}
async function viewOrder(url) {
  let orders = [];
  let status;

  try {
    let response = await fetch(url);
    let data = await response.json();
    for (const key in data) {
      orders.push({
        address: data[key].address,
        cartData: data[key].cartData,
        city: data[key].city,
        email: data[key].email,
        name: data[key].name,
        totalAmount: data[key].totalAmount,
      });
    }
  } catch (error) {
    alert("Error Occured");
    console.log("TC-88", error);
  }
  status = orders.length > 0;
  return { status, orders };
}

export default {
  loadData,
  saveData,
  viewOrder,
};
