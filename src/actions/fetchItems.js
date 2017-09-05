import rootRef from '../firebaseConfig';

const itemsRef = rootRef.child('app-todo/items')
export function fetchItems() {
    itemsRef.on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          var key = childSnapshot.key;
          var value = childSnapshot.val();
          console.log("Key: " + key + " --> Val: " + value);
        });
      });
}