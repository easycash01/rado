import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function Gallery() {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
        });
        
        function openLightboxOnSlide(number) {
        setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
        });
        }

return (
<>

<div>
<img src='./img/galleria/min/min_4.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/galleria/min/min_5.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/galleria/min/min_16.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>

<div>
<img src='./img/galleria/min/min_1.jpg' onClick={() => openLightboxOnSlide(4) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/galleria/min/min_2.jpg' onClick={() => openLightboxOnSlide(5) } className="FotoGall1">
</img>

<img src='./img/galleria/min/min_3.jpg' onClick={() => openLightboxOnSlide(6) } className="FotoGall1">
</img>

</div>



<div>
<img src='./img/galleria/min/min_6.jpg' onClick={() => openLightboxOnSlide(7) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/galleria/min/min_7.jpg' onClick={() => openLightboxOnSlide(8) } className="FotoGall1">
</img>

<img src='./img/galleria/min/min_8.jpg' onClick={() => openLightboxOnSlide(9) } className="FotoGall1">
</img>

</div>


<div>
<img src='./img/galleria/min/min_9.jpg' onClick={() => openLightboxOnSlide(10) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/galleria/min/min_10.jpg' onClick={() => openLightboxOnSlide(11) } className="FotoGall1">
</img>

<img src='./img/galleria/min/min_12.jpg' onClick={() => openLightboxOnSlide(12) } className="FotoGall1">
</img>

</div>

<div>
<img src='./img/galleria/min/min_13.jpg' onClick={() => openLightboxOnSlide(13) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/galleria/min/min_14.jpg' onClick={() => openLightboxOnSlide(14) } className="FotoGall1">
</img>

<img src='./img/galleria/min/min_15.jpg' onClick={() => openLightboxOnSlide(15) } className="FotoGall1">
</img>

</div> <br/> <br/>


<FsLightbox
toggler={lightboxController.toggler}
type="image"

sources={[
'img/galleria/gall4.jpg',
'img/galleria/gall5.jpg',
'img/galleria/gall16.jpg',
'img/galleria/gall1.jpg',
'img/galleria/gall2.jpg',
'img/galleria/gall3.jpg',
'img/galleria/gall6.jpg',
'img/galleria/gall7.jpg',
'img/galleria/gall8.jpg',
'img/galleria/gall9.jpg',
'img/galleria/gall10.jpg',
'img/galleria/gall12.jpg',

'img/galleria/gall13.jpg',
'img/galleria/gall14.jpg',
'img/galleria/gall15.jpg',
]}
slide={lightboxController.slide}
/>
</>
);
}

export default Gallery;