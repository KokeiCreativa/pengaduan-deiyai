function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    // Tambah pesan user
    const chatBox = document.getElementById("chatBox");

    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerHTML = `
    <div class="text">${message}</div>
    <div class="avatar user-avatar">👤</div>
  `;
    chatBox.appendChild(userMessage);

    // Tambah balasan bot
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerHTML = `
    <div class="avatar bot-avatar">🤖</div>
    <div class="text">Pengaduan Anda sedang diarahkan ke WhatsApp Kominfo Deiyai...</div>
  `;
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    // Kirim ke WhatsApp
    const nomor = "6281234567890"; // Ganti ke nomor WhatsApp Kominfo
    const waLink = `https://wa.me/${nomor}?text=${encodeURIComponent("Pengaduan dari warga Deiyai:\n\n" + message)}`;

    setTimeout(() => {
        window.open(waLink, "_blank");
    }, 1000);

    input.value = "";
}
