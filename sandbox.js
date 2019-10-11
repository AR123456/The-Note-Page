const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelectorAll("button");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `<li data-id="${id}">
  <div>${recipe.title}</div>
  <div><small>${time}</small></div>
  <button class="btn btn-danger btn-sm my-2">Delete</button>
  </li>`;
  list.innerHTML += html;
};
// delete from UI //
const deleteRecipe = id => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach(recipe => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};
// det documents
// real time event delegation - set up real time listioner
const unsub = db.collection("recipes").onSnapshot(snapshot => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if (change.type === "added") {
      // console.log(doc);
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// get documents  - the non event listen way
// db.collection("recipes")
//   .get()
//   .then(snapshot => {
//     //when we have the data
//     snapshot.docs.forEach(doc => {
//       // get the id property , add it as a second argument
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

// add documents
form.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch(err => {
      console.log(err);
    });
});
// delete documents with event delegation
list.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        // console.log("recipe deleted");
      });
  }
});
// unsub from database changes
button.addEventListener("click", () => {
  unsub();
  console.log("unsub from collection changes");
});
