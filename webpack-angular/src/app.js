import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';


class Home{
    constructor($scope){
        this.name="world"
        this.scope=$scope
    }

    add(){
        this.name='fck'
        console.log(this.scope)
    }
}

Home.$inject=['$scope']

angular.module('app', []).controller('HomeController',Home)
