<template>
  <div id="thuglife-image" class="rounded shadowed">
    <img id="thuglife-sunglasses" src="/images/sunglasses.png" alt="Martijn van Pinelab"/>
  </div>
</template>
<style>
#thuglife-sunglasses {
  position: relative;
  top: -100px;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: top ease 2s;
}
#thuglife-sunglasses:hover {
  top: 5px;
  opacity: 1;
}

#thuglife-image {
  background-image: url('/images/martijn-square.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 1s;
}
#thuglife-image:hover {
  filter: grayscale(1);
  transition: 1s;
}
</style>