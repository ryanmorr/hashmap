/*! @ryanmorr/hashmap v0.1.3 | https://github.com/ryanmorr/hashmap */
function e(...e){const t=Object.create(null,{[Symbol.iterator]:{enumerable:!1,writable:!1,configurable:!1,value:()=>({items:Object.entries(t),next:function(){return{done:0===this.items.length,value:this.items.shift()}}})}});return e.length&&Object.assign(t,...e),t}export{e as default};
