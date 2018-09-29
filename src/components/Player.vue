<template>
    <div class="player-container">
        <div class="music-info-container">
            <div class="music-info-container-inner">
                <div class="music-artist">{{artist}}</div>
                <div class="music-album">{{album}}</div>
            </div>
        </div>
        <div class="music-control-container">
            <div class="music-name">{{nameText}}</div>
            <div class="music-schedule-container">
                <div class="music-progress-text">{{currentTimeText}}</div>
                <div class="divider">/</div>
                <div class="music-duration-text">{{durationText}}</div>
            </div>
            <div class="music-pic-container">
                <div class="music-pic" v-bind:class="{ animate: isPlaying }"></div>
                <div class="btn-control" @click="handlePlaying()">
                    <div class="btn-control-img play" v-bind:class="{ play: !isPlaying, pause: isPlaying }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Howl } from 'howler';

export default {
  mounted() {
    // const url = 'http://132.232.187.54:9000/playlist';
    // Vue.axios.get(url).then(response => {
    //   console.log(response.data.data[0].songUrl);
    //   let sound = new Howl({
    //     src: [response.data.data[0].songUrl],
    //     onload: () => {
    //       console.log('onload');
    //     },
    //     onplay: () => {
    //       console.log('onplay');
    //     }
    //   });
    //   console.log(sound);
    //   sound.play();

    //   setInterval(() => {
    //     console.log(sound.state());
    //   }, 1000);
	// });
	// http://m10.music.126.net/20180928015227/f3267b9e7ec1d0ea31adb408e5d016fd/ymusic/7002/8eb1/b5ef/1eb97d5d5f125ab650147db90ec01f40.mp3
	 let sound = new Howl({
		src: ['http://m10.music.126.net/20180929003542/c2fb63429eaeda9a1eda2f62024268fb/ymusic/7002/8eb1/b5ef/1eb97d5d5f125ab650147db90ec01f40.mp3'],
		html5: true,
        onload: () => {
          console.log('onload');
        },
        onplay: () => {
          console.log('onplay');
        }
      });
      console.log(sound);
      sound.play();

      setInterval(() => {
        console.log(sound.duration());
      }, 1000);
  },
  data() {
    return {
      nameText: 'Wonderful U',
      artist: 'AGA',
      album: 'Ginadoll',
      currentTimeText: '00:20',
      durationText: '04:23',
      isPlaying: false
    };
  },
  methods: {
    handlePlaying() {
      this.isPlaying = this.isPlaying ? false : true;
    }
  }
};
</script>

<style scoped>
.player-container {
  width: 100%;
  height: 100%;
}

.music-info-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-filter: drop-shadow(0 1px 2px #293939);
  filter: drop-shadow(0 1px 2px #293939);
  z-index: 9;
}

.music-info-container-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 210px;
  background-color: #018fa6;
  z-index: 10;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 92%, 0 100%);
  clip-path: polygon(0 0, 100% 0%, 100% 92%, 0 100%);
}

.music-artist {
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  margin-top: 80px;
  margin-left: 24px;
  opacity: 0.8;
}

.music-album {
  color: #fff;
  font-family: 'less light';
  font-size: 24px;
  margin-left: 24px;
  opacity: 0.7;
}

.music-control-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(at 0px 0px, #65737a, #213131);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.music-name {
  color: #008095;
  font-family: 'less light';
  text-align: right;
  font-size: 24px;
  margin: 250px 16px 0 0;
}
.music-schedule-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  font-family: 'less light';
  margin: 0 16px 0 0;
}

.music-progress-text {
  color: #008095;
}

.divider {
  color: #95aab0;
  margin: 0 4px;
}

.music-duration-text {
  color: #95aab0;
  font-family: 'less light';
}
.music-pic-container {
  position: relative;
  width: 280px;
  height: 280px;
  margin: 16px 16px 0 0;
}

.music-progress {
  width: 280px;
  height: 280px;
  border-radius: 140px;
  background-color: #95aab0;
  opacity: 0.5;
}

.music-pic {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 240px;
  height: 240px;
  border-radius: 120px;
  background-image: url('../assets/imgs/WonderfulU.jpg');
  background-size: cover;
  box-shadow: 0px 0px 10px #293939;
  z-index: 2;
}

.animate {
  animation: 10s linear 0s normal none infinite rotate;
  -webkit-animation: 10s linear 0s normal none infinite rotate;
}

.btn-control {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #4a6b7b;
  box-shadow: 0px 0px 8px #293939;
  z-index: 3;
}

.btn-control-img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  z-index: 4;
  background-repeat: no-repeat;
  background-size: cover;
}

.play {
  background-image: url('../assets/imgs/play.svg');
}

.pause {
  background-image: url('../assets/imgs/pause.svg');
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
