var AjaxRequest = function( url, data ){
  this.url = url;
  this.data = data || [];
}

AjaxRequest.prototype.get = function( callback ){
  var request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.onload = function(){
    if ( request.status === 200 ){
      var jsonString = request.responseText;
      this.data = JSON.parse(jsonString);
      callback(this.data);
    }
  }.bind(this);
  request.send();
}

AjaxRequest.prototype.post = function(){
  var request = new XMLHttpRequest();
  request.open("POST", this.url );
  request.setRequestHeader( "Content-Type", "application/json")
  request.send( JSON.stringify( this.data ) );
}

module.exports = AjaxRequest;