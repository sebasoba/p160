AFRAME.registerComponent("cursor",{
    handleMouseEnterEvents: function(){
    this.el.addEventlistener ("mouseenter", () => {
    const placeContainer=document.querySelector("#places-container");
    const {state} = placeContainer.getAttribute("tour");
    if (state === "places-list") {
        this.handlePlacesListState();
    }
    });
},
    handlePlacesListState: function() {
    const id = this.el.getAttribute("id") ;
    const placesId = ["place-home", "place-garden", "place-main gate"];
    if (placesId.includes(id)) {
    const placeConatainer= document.querySelector("#places-container");
    placeContainer.setAttribute("cursor-listener",{
    selectedItemId: id
    });
    this.el.setAttribute("material",{
        opacity:1
    });
}
},
