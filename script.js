$(document).ready(function() {
	var step=1;
	var flag1=0;
	var flag2=0;
	var flag3=0;
	$('.ending-retry').on("click", function() {
		step=1;
		flag1=0;
		flag2=0;
		flag3=0;
		$('.ending-title').html("당신은 <span class='result'></span>입니다");
		$('.content-wrap').hide();
		$('.first-block').show();
	});
	$('.content-wrap').hide();
	$('.first-block').show();
	$('.answer').on("click", function(e) {
		console.log(e.target.id);
		step += 1;
		if (step == 2) {
			$('.content-wrap').hide();
			$('.second-block').show(300);
			if (e.target.id == "num1") {
				flag1=0;
				$('.ending-title .result').text("나리");
			} else if (e.target.id == "num2" || e.target.id == "num3") {
				$('.ending-title').text("뭐야 나가세요;")
				$('.ending-content').text("뉘신지 ... ")
				$('.content-wrap').hide();
				$('.fourth-block').show(300);
			}	
		} else if (step == 3) {
			$('.content-wrap').hide();
			$('.third-block').show(300);
			if (e.target.id == "num1") {
				flag2=0;
				$('.ending-title .result').text("나리");
			} else if (e.target.id == "num2") {
				flag2=1;
				$('.ending-title .result').text("메루");
				$('.ending-content').html("자신의 인성이 스레기임을 잘 알고 있군요!<br/>다행입니다 :)");
			} else if (e.target.id == "num3") {
				flag2=2;
				$('.ending-title .result').text("바보");
				$('.ending-content').html("지가 착한지도 나쁜지도 모르는군요!<br/>이런 바보는 나리랑 친구할 자격이 없어요~");
			}
		} else if (step == 4) {
			if (e.target.id == "num1") {
				if (flag2 == 1) {
					$('.ending-title .result').text("이상한 사람");
					$('.ending-content').html("메이플 하는 사람 중에 나쁜 사람은 없는데...");
				}
				if (flag1 ==0 && flag2 == 0) {
					$('.ending-content').html("착하고 메이플을 즐기는 사람은 바로!<br/>나리에요 ><");
				}
			} else if (e.target.id == "num2" || e.target.id == "num3") {
				if (flag2 != 1 && flag2 != 2) {
					$('.ending-title').text("양심이 있나요?");
					$('.ending-content').html("지금 자신의 인성이 착하다고 하신건가요 메루씨 ..?<br/>돌아가세요");
				}
			}
			$('.content-wrap').hide();
			$('.fourth-block').show(300);
		}
	});

})