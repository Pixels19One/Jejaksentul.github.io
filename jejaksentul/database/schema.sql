-- Database Schema for JejakSentul.id
CREATE TABLE jalur_trekking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    nama VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    difficulty ENUM('Pemula','Menengah','Sulit') NOT NULL,
    durasi VARCHAR(50),
    jarak VARCHAR(50),
    harga_struktur JSON,
    featured TINYINT(1) DEFAULT 0,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE foto_jalur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jalur_id INT NOT NULL,
    filename VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),
    is_primary TINYINT(1) DEFAULT 0,
    sort_order INT DEFAULT 0,
    FOREIGN KEY (jalur_id) REFERENCES jalur_trekking(id) ON DELETE CASCADE
);

CREATE TABLE atraksi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_atraksi VARCHAR(100) NOT NULL
);

CREATE TABLE jalur_atraksi (
    jalur_id INT NOT NULL,
    atraksi_id INT NOT NULL,
    PRIMARY KEY (jalur_id, atraksi_id),
    FOREIGN KEY (jalur_id) REFERENCES jalur_trekking(id) ON DELETE CASCADE,
    FOREIGN KEY (atraksi_id) REFERENCES atraksi(id) ON DELETE CASCADE
);

CREATE TABLE itinerary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jalur_id INT NOT NULL,
    waktu VARCHAR(50),
    aktivitas TEXT,
    urutan INT,
    FOREIGN KEY (jalur_id) REFERENCES jalur_trekking(id) ON DELETE CASCADE
);

CREATE TABLE booking_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jalur_id INT,
    nama VARCHAR(100),
    whatsapp VARCHAR(20),
    tanggal DATE,
    peserta INT,
    special_request TEXT,
    price INT,
    status ENUM('pending','confirmed','cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jalur_id INT,
    nama VARCHAR(100),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    testimonial TEXT,
    approved TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (jalur_id) REFERENCES jalur_trekking(id) ON DELETE SET NULL
);
