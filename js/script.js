document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let birthdate = document.getElementById("birthdate").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById("message").value.trim();

    if (!name || !birthdate || !gender || !message) {
      alert("Mohon lengkapi semua data wajib!");
      return;
    }

    // Validasi umur minimal 10 tahun
    let today = new Date();
    let birthday = new Date(birthdate);
    let age = today.getFullYear() - birthday.getFullYear();
    if (age < 10) {
      alert("Tanggal lahir tidak valid.");
      return;
    }

    // Tampilkan popup sukses
    let popup = document.getElementById("popupSuccess");
    popup.classList.add("show");

    // Hilang setelah 3 detik
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

    // Reset form
    document.getElementById("contactForm").reset();
  });

  window.addEventListener("load", () => {
    const welcome = document.getElementById("welcomePopup");

    // Tampilkan popup
    setTimeout(() => {
      welcome.classList.add("show");
    }, 500);

    // Hilang setelah 3 detik
    setTimeout(() => {
      welcome.classList.remove("show");
    }, 3500);
  });