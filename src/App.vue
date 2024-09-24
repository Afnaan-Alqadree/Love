<template>
  <div id="app" class="love-note">
    <button @click="showMessage" v-if="!messageVisible" class="love-button">Press Me!</button>
    
    <div v-if="messageVisible" class="message-container">
      <h1>I love you! <span class="material-icons heart"></span></h1>
      <div class="picture-container">
        <img src="@/assets/1515342933.svg" alt="pic" class="pic">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      messageVisible: false,
    };
  },
  methods: {
    showMessage() {
      this.messageVisible = true;
    }
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ffe4e1;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  position: relative;
}
.love-button {
  padding: 15px 30px;
  background-color: #e64da0;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.5em;
  cursor: pointer;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.love-button:hover {
  transform: scale(1.1);
  background-color: #ff1493;
}

.message-container {
  text-align: center;
  opacity: 0;
  animation: fadeIn 2s forwards, popIn 1s 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

h1 {
  font-size: 4em;
  color: #e64da0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.heart {
  color: #e64da0;
  font-size: 1em;
  margin-top: 2px;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
.picture-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pic {
  width: 200px;
  height: auto;
  animation: bounce 2s infinite ease-in-out;
}


@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
