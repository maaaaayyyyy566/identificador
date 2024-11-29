

Webcam.set({
    width:350, height:350,  image_format:"png", png_qualiy:90
  });
  
  Webcam.attach("#camara")
  
  function foto()
  {
      Webcam.snap(function(data_uri) {
          document.getElementById("foto").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      });
  }
  //  activar la AI
  console.log(" ml5 ");
  
  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BclJA8r3N/model.json", Aaron)
  function Aaron(){
    console.log("modelo de Aaron")
  }
  
  
      function identificar(){
  // activar al boton de revisar la red neuronal 
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult); 
      }
  
  
  // recisar si tenemos errores o resultados 
  function gotResult(error,resultados){
    if (error) {
      console.error(error);
    } else {
      // The results are in an array ordered by confidence.
    
    document.getElementById("resultado").innerHTML = resultados[0].label;
     document.getElementById("confianza").innerHTML = resultados[0].confidence;
    }
  }