<template>
    <!-- From Uiverse.io by gharsh11032000 --> 
  <div class="card">
    <img :src="img" alt="MindSync MindSync MindSync">
    <div class="card__content">
      <p class="card__title">{{ head }}</p>
      <p class="card__description"> {{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCard',
  props:{
    img:{
      type:String,
      required:true
    },
    head:{
      type:String,
      required:true
    },
    text:{
      type:String,
      required:true
    }
  }
}
</script>


<style scoped>
  * {
        padding: 0;
        margin: 0;
        font-family: "Poppins",sans-serif;
        box-sizing: border-box;
        color: #fff;
    }
    /* From Uiverse.io by gharsh11032000 */ 
.card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 1px #21ff2c;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #21ff2c;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

</style>
