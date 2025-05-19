function test() {
  document.getElementById('username-error').textContent = "";
  document.getElementById('email-error').textContent = "";
  document.getElementById('password1-error').textContent = "";
  document.getElementById('password2-error').textContent = "";

  const usernameInput = document.querySelector('input[name="username"]');
  const emailInput = document.querySelector('input[name="email"]');
  const p1Input = document.getElementById('password1');
  const p2Input = document.getElementById('password2');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const p1 = p1Input.value;
  const p2 = p2Input.value;

  let isValid = true;

  if (username === "") {
    document.getElementById('username-error').textContent = "이름을 입력해주세요.";
    usernameInput.classList.add('input-error');
    usernameInput.classList.remove('input-success');
    isValid = false;
  } else {
    usernameInput.classList.remove('input-error');
    usernameInput.classList.add('input-success');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === "") {
  document.getElementById('email-error').textContent = "이메일을 입력해주세요.";
  emailInput.classList.add('input-error');
  emailInput.classList.remove('input-success');
  isValid = false;
} else if (!emailRegex.test(email)) {
  document.getElementById('email-error').textContent = "올바른 이메일 형식이 아닙니다.";
  emailInput.classList.add('input-error');
  emailInput.classList.remove('input-success');
  isValid = false;
} else {
  emailInput.classList.remove('input-error');
  emailInput.classList.add('input-success');
}


  if (p1.length < 6) {
    document.getElementById('password1-error').textContent = "비밀번호는 최소 6자입니다.";
    p1Input.classList.add('input-error');
    p1Input.classList.remove('input-success');
    isValid = false;
  } else {
    p1Input.classList.remove('input-error');
    p1Input.classList.add('input-success');
  }

  if (p1 !== p2) {
    document.getElementById('password2-error').textContent = "비밀번호가 일치하지 않습니다.";
    p2Input.classList.add('input-error');
    p2Input.classList.remove('input-success');
    isValid = false;
  } else {
    p2Input.classList.remove('input-error');
    p2Input.classList.add('input-success');
  }

  if(isValid != false) {
    alert('회원가입 완료!')
  }


  return isValid; 
}

document.getElementById('togglePassword1').addEventListener('click', function() {
  const pwd = document.getElementById('password1');
  if (pwd.type === 'password') {
    pwd.type = 'text';
    this.textContent = '숨기기';
  } else {
    pwd.type = 'password';
    this.textContent = '보기';
  }
});

document.getElementById('togglePassword2').addEventListener('click', function() {
  const pwd = document.getElementById('password2');
  if (pwd.type === 'password') {
    pwd.type = 'text';
    this.textContent = '숨기기';
  } else {
    pwd.type = 'password';
    this.textContent = '보기';
  }
});

