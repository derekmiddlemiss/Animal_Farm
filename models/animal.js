var Animal = function( params ){
  console.log( params );
  if ( params['name'] ) this.name = params.name;
  if ( params['type'] ) this.type = params.type;
  if ( params['feedingTimes'] ) this.feedingTimes = params.feedingTimes;
}

module.exports = Animal;