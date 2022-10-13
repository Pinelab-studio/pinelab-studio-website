<template>
  <div id="thuglife-overlay" class="rounded shadowed">
    <img id="thuglife-image" src="/images/sunglasses.png" alt="Martijn van Pinelab"/>
  </div>
</template>
<style>
#thuglife-image {
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 1s;
}
#thuglife-image:hover {
  transition: 1s;
  opacity: 1;
}

#thuglife-overlay {
  background-image: url('/images/martijn-square.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 1s;
}
#thuglife-overlay:hover {
  filter: grayscale(1);
  transition: 1s;
}
</style>