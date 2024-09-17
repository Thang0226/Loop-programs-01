function game_on() {
  let min_num = +prompt("Số nhỏ nhất của khoảng:");
  let max_num = +prompt("Số lớn nhất của khoảng:");
  let num = min_num + Math.round(Math.random() * (max_num - min_num));

  let guess_num = +prompt("Đoán một số trong khoảng:");
  let count = 1;
  while (count < 3) {
    if (guess_num < num) {
      guess_num = +prompt("Số bạn đoán nhỏ hơn mục tiêu, hãy đoán lại:");
    } else if (guess_num > num) {
      guess_num = +prompt("Số bạn đoán lớn hơn mục tiêu, hãy đoán lại:");
    }
    if (guess_num == num) {
      alert("Chúc mừng! Bạn đã đoán đúng số!");
      break;
    }
    count++;
  }
  document.write("Trò chơi kết thúc!");
}
