// Show the modal box
function showModal(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('id01').style.display = 'block'; // Show modal
  }
  
  // Close the modal box
  function closeModal() {
    document.getElementById('id01').style.display = 'none';
  }
// Code help from chat gpt I had this code in the prompt: <div class="submit-container">
//     <button onclick="document.getElementById('id01').style.display='block'" class="submit button ">Submit</button>

//     <div id="id01" class="submit-modal">
//       <div class="submit-content">
//         <div class="submit-container">
//           <span onclick="document.getElementById('id01').style.display='none'" class="submit button display-topright">&times;</span>
//           <p>We have sent a confirmation email to you!</p>
//           <p>Welcome to Movie National Collective!</p>
//         </div>
//       </div>
//     </div>
//   </div>
// I asked chat to help the box show on click 

    