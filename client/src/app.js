var AjaxRequest = require( './services/ajax_request.js' );
var AnimalsView = require( './views/animals_view.js' );

function app() {

  var animalsData = new AjaxRequest( 'http://localhost:3000/api/animals' );
  var animalsView = new AnimalsView( animalsData );
  animalsData.get( animalsView.render );

  var animalForm = document.querySelector( '#animal-form' );
  animalForm.addEventListener( 'submit', function(event){
    event.preventDefault();
    var animal = {
      name: this.name.value,
      type: this.type.value,
      feedingTimes: this.feedingtimes.value
    }
    createAnimal( animal ); 
  });

}

function createAnimal( animal ){
  var animalPost = new AjaxRequest( 'http://localhost:3000/api/animals', animal );
  animalPost.post();
}

window.addEventListener( 'load', app );