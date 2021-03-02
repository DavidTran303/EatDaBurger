document.addEventListener('DOMContentLoaded', (event) => {
    if(event){
        console.info('Dom loaded')
    };

// CREATE burger button 
  const createBurgerBtn = document.getElementById('addburger')




  createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    // Grabs the value of the textarea that goes by the name, "burger"
    const newBurger = {
      burger: document.getElementsByName('burger')[0].value.trim()
    }
    console.log(newBurger);

    // Send POST request to create a new burger

    fetch("/api/burgers", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize the JSON body
      body: JSON.stringify(newBurger)
    })
      .then((response) => {
        // Empty the form
        document.getElementsByName('burger')[0].value = ''

        // Reload the page so the user can see the new burger
        console.log("Created a delicious burger!")
        location.reload()
      });
  });

//update button
const devourItBtns = document.querySelectorAll('#eat');
  if(devourItBtns){
    devourItBtns.forEach((button) =>{
        button.addEventListener('click', (e) =>{
            const id = e.target.getAttribute('data-id')

            const newBurgerAte = {
            devoured: true,
            };
            
            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },

          // make sure to serialize the JSON body
          body: JSON.stringify(newBurgerAte),
            }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed sleep to: ${true}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });


        });
    });
  }





});

