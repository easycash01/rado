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
<img src='./img/mangaLavori.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>

<div>
<img src='./img/mangaLavori.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>


<div>
<img src='./img/mangaLavori.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>


<div>
<img src='./img/mangaLavori.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>

<div>
<img src='./img/mangaLavori.jpg' onClick={() => openLightboxOnSlide(1) } className="FotoGall1" source='foto1'>
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(2) } className="FotoGall1">
</img>

<img src='./img/rado1.jpg' onClick={() => openLightboxOnSlide(3) } className="FotoGall1">
</img>

</div>


<FsLightbox
toggler={lightboxController.toggler}
type="image"

sources={[
'img/mangaLavori.jpg',
'img/rado1.jpg',
]}
slide={lightboxController.slide}
/>
</>
);
}

export default Gallery;