'use strict';

class GameData  {

    timerId = 0;
    /*
    currentDiceNbr = 0;
    nbrOfRounds = 0;
    nbrOfRemovedDices = 0;
    nbrOfTotalRounds = 0;
    */


    imgRefs = [
        'https://openclipart.org/download/282127/Die1.svg',
        'https://openclipart.org/download/282128/Die2.svg',
        'https://openclipart.org/download/282129/Die3.svg',
        'https://openclipart.org/download/282130/Die4.svg',
        'https://openclipart.org/download/282131/Die5.svg',
        'https://openclipart.org/download/282132/Die6.svg'
    ];

    createImgElements() {

        //Leva som man lär med utskrifter
        console.log('createImgElements');
        
        //Nollställ spelet
        /*oGameDataObject.currentDiceNbr = 0;
        oGameDataObject.nbrOfRounds = 0;
        oGameDataObject.nbrOfRemovedDices = 0;*/

        //Slumptal mellan 0 och 5
        let rndValue = 0;

        //Referens till elementet där bilden ska placeras som ett barnelement
        let mainRef = document.querySelector('main');

        //Bildelementet i iterationen
        let imgRef = null;

        for(let i = 0; i < 6; i++) {

            //slumpa tal mellan 0 0ch 5
            rndValue = Math.random();
            rndValue = rndValue * 6;
            rndValue = Math.floor( rndValue );

            console.log( rndValue );

            //Skapa ett bildelement
            imgRef = document.createElement('img');

            //src-attributet som matchar vektorn ovan med position 0-5
            imgRef.setAttribute('src', this.imgRefs[rndValue]);

            //alt-attributet som utgör siffran 1-6 (borde vara en förklarande text...)
            imgRef.setAttribute('alt', (rndValue + 1));

            //CSS heigth och width för annars blir bilden stoooor.
            imgRef.style.height = '10%';
            imgRef.style.width = '10%';

            //Avslutningsvis addera den nya bilden till DOM:en i main
            mainRef.appendChild(imgRef);

            //Några utskrifter! Titta gärna också i inspekteraren under main-elementet.
            //console.log(imgRef.getAttribute('src'));
            //console.log(imgRef.getAttribute('alt'));
            //console.log(imgRef.getAttribute('style'));

            /*
                Lägg till en lyssnare på aktuellt bildelement och när användaren klickar på bilden
                skriv ut alt-attributet i consolen och ta sedan bort bilden från DOM:en.
                Fundera gärna över hur ni kan utöka detta med att t ex användaren måste klicka på bilderna
                i stigande eller fallande ordning annars blir det GAME OVER! 
            */

        
            //Lägg till en lyssnare på klick-händelsen på aktuell bild
            imgRef.addEventListener('click', function( e ) {

                //var inträffade händelsen, var fångades händelsen samt vad är this
                console.log(e.target, e.currentTarget, this);

                console.log( this.getAttribute('alt'));
                
                oGameDataObject.currentDiceNbr = this.getAttribute('alt').toString();
                //Har spelaren tagit bort sista tärningen öka nbrOfRounds!
                //Är siffran på tärningen lägre än tidigare borttagen tärning så är det GAME OVER!

                this.remove();
                //e.currentTarget.remove();
                //e.target.remove();

                if(e.target === e.currentTarget) {
                    console.log('Det är samma element som händelsen inträffar på som fångar händelsen!');
                }

            });



        }

    }

    removeImgElements() {

        //Sök ut alla bild-element i main-elementet och om det finns något/några ta bort bild för bild
        //i valfri iterationstyp.
        //Använd med fördel console.log() ofta!

        console.log('removeImgElements');

        //Sök ut alla bilder som finns i main-elementet
        let imgRefs = document.querySelectorAll('main img');

        //Om antalet bilder inter är noll (0)
        if( imgRefs.length !== 0) {

            //Skriv ut alla referenser till bilderna
            console.log( imgRefs );

            //Genväg till en bild (se nedan)
            let imgRef = null;

            for(let i = 0; i < imgRefs.length; i++) {

                //Hämta ut referensen till en bild i imgRefs
                imgRef = imgRefs.item(i);

                //Skriv ut data om bilden
                console.log(imgRef);
                console.log(imgRef.getAttribute('alt'));

                //Ta bort bilden från DOM
                imgRef.remove();
            }

        }
        
    }

};

let oGameDataObject = new GameData();

window.addEventListener('load', function() {
    console.log( Date.now(), 'load' );
});

window.addEventListener('DOMContentLoaded', function() {
    console.log( Date.now(), 'DOMContentLoaded' );

    alert('Tryck b||B för att börja och e||E för att avsluta!');

    document.addEventListener('keydown', function( e ) {


        if( e.key === 'b' || e.key === 'B') {

            //Har du tid över skapa en timer som exekverar var tionde-sekund och kör metoderna nedan.
            //Anropa metoden som tar bort alla bilder i main-elementet!

            console.log('Startar spelet!');
            //VIKTIGT annars blir det tokigt
            //Ni har en timer igång då behöver den stängas ner innan ni startar en ny. :-)
            if(oGameDataObject.timerId !== 0) {
                clearInterval(oGameDataObject.timerId);
                oGameDataObject.timerId = 0;
                /*oGameDataObject.currentDiceNbr = 0;
                oGameDataObject.nbrOfRounds = 0;
                oGameDataObject.nbrOfRemovedDices = 0;*/
            }
        
            oGameDataObject.timerId = setInterval(function() {

                oGameDataObject.removeImgElements()
                oGameDataObject.createImgElements();

            }, 2000);
            
        }

        if(e.key === 'a' || e.key === 'A') {

            console.log('Avslutar spelet!');

            if(oGameDataObject.timerId !== 0) {
                clearInterval(oGameDataObject.timerId);
                oGameDataObject.timerId = 0;
                //oGameDataObject.currentDiceNbr = 0;
                //oGameDataObject.nbrOfRounds = 0;
                //oGameDataObject.nbrOfRemovedDices = 0;
            }
        }
    });

        /*
            1. Lägg till en lyssnar för tangentbordet 
            2. Kontrollera om bokstaven b resp. B är tryckt
            3. Om så är fallet anropa metoderna removeImgElements() resp. createImgElements()
            4. Skriv koden för metoden removeImgElements() i vilken du skall ta bort alla img-element som finns i main img.
            5. Skriv koden för metoden createImgElements() i vilken du skall skapa sex img-element.
            5.1 Img-elementen skall skapas i en iteration och dess src-attribut skall bestå av värdet i ngn av planserna i vektorn imgRefs.
            5.2 slumpa ett tal mellan 1-6 (floor() och random())
            5.3 Skapa ett img-element
            5.4 Lägg till src- och alt-attributen till det nya img-elementet.
            5.5 ändra css-egenskaperna width och height till 10% för det nya img.elementet.
            5.6 lägg det nya img-elementet sist i main-elementet.
            
            Om tid finnes...
            6. Ändra din lösning så att nya täningar visas med ett intervall på två sekunder.
            7. Ändra så att bara en timer kan vara igång åt gången.
            8. Lägg till kod som gör att timern avslutas om användaren trycker på e eller E på tangentbordet.
        */
});