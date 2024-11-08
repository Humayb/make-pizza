function allowDrop(e){
    e.preventDefault();
  }
  function drag(e){
    e.dataTransfer.setData('image', e.target.id)
  }
  function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData('image')
    e.target.appendChild(document.getElementById(data))
    document.getElementById(data).style.width = "300px"
  }
