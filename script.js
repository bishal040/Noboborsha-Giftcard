function generateCard() {
    const to = document.getElementById('to').value;
  
    document.getElementById('toText').innerText = to;
    
    document.getElementById('card').classList.remove('hidden');
  }
  