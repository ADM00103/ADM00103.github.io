function playSong(e, t) {
	var audio = document.getElementById(e);
	var t = $(t)[0];
	var title = $('#player__' + e + ' > .player-title')[0];
	var progress = $('#player__' + e + ' > .player-progress')[0];
	var tracktime = $('#player__' + e + ' > .player-time')[0];
	if (audio.paused) {
		$('.player').each(function() {
			if (audio != $(this).children(".player-audio")[0]) {
				$(this).children(".player-audio")[0].pause();
				$(this).children(".player-audio")[0].currentTime = 0;
				alltime = $(this).children(".player-time").attr("data-default");
				$(this).children(".player-time").html(alltime);
			}
		});
		$('.pause-button').each(function() {
			$(this)[0].classList.remove("pause-button");
			$(this)[0].classList.add("play-button");
		});
		$('.player-progress--visible').each(function() {
			$(this)[0].classList.remove("player-progress--visible");
		});
		$('.player-title--invisible').each(function() {
			$(this)[0].classList.remove("player-title--invisible");
		});
		if (audio.currentTime == 0) {
			tracktime.innerHTML = '00:00';
		} else {
			var seconds = Math.floor(audio.currentTime % 60);
  			if (seconds < 10) {
  				seconds = '0' + String(seconds);
  			}
  			var minutes = Math.floor(audio.currentTime / 60);
  			if (minutes < 10) {
  				minutes = '0' + String(minutes);
  			}
	  		tracktime.innerHTML = minutes + ':' + seconds;
		}
		title.classList.add("player-title--invisible");
		progress.classList.add("player-progress--visible");
		audio.play();
		t.classList.remove("play-button");
		t.classList.add("pause-button");
		audio.ontimeupdate = function() {
			var percentage = Math.floor((100 / audio.duration) * audio.currentTime);
  			progress.value = percentage;
  			var seconds = Math.floor(audio.currentTime % 60);
  			if (seconds < 10) {
  				seconds = '0' + String(seconds);
  			}
  			var minutes = Math.floor(audio.currentTime / 60);
  			if (minutes < 10) {
  				minutes = '0' + String(minutes);
  			}
  			if (audio.currentTime != 0) {
	  			tracktime.innerHTML = minutes + ':' + seconds;
	  		}
  			if (percentage === 100) {
  				audio.pause();
				audio.currentTime = 0;
				$('.player-progress--visible')[0].classList.remove("player-progress--visible");
				$('.player-title--invisible')[0].classList.remove("player-title--invisible");
				$('.pause-button').each(function() {
					$(this)[0].classList.remove("pause-button");
					$(this)[0].classList.add("play-button");
				});
  			}
		};
		progress.onclick = function(e) {
			var percent = e.offsetX / this.offsetWidth;
			var time = percent * audio.duration;
			var seconds = Math.floor(time % 60);
  			if (seconds < 10) {
  				seconds = '0' + String(seconds);
  			}
  			var minutes = Math.floor(time / 60);
  			if (minutes < 10) {
  				minutes = '0' + String(minutes);
  			}
  			if (audio.currentTime != 0) {
  				$(this).parent().children(".player-time").text(minutes + ':' + seconds);
	  		}
			audio.currentTime = time;
			e.target.value = Math.floor(percent / 100);
		};
	} else {
		$('.player-progress--visible')[0].classList.remove("player-progress--visible");
		$('.player-title--invisible')[0].classList.remove("player-title--invisible");
		audio.pause();
		tracktime.innerHTML = tracktime.getAttribute("data-default");
		t.classList.remove("pause-button");
		t.classList.add("play-button");
	}
}
