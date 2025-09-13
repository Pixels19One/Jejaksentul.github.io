-- Sample Data for jalur_trekking
INSERT INTO jalur_trekking (slug, nama, deskripsi, difficulty, durasi, jarak, harga_struktur, featured, status)
VALUES
('curug-leuwi-hejo', 'Curug Leuwi Hejo', 'Air terjun jernih, cocok untuk pemula dan keluarga.', 'Pemula', '2 jam', '3 km', '{"solo":150000,"group2_5":120000,"group6plus":100000}', 1, 'active'),
('goa-agung-garunggang', 'Goa Agung Garunggang', 'Eksplorasi gua unik, pengalaman menantang.', 'Menengah', '4 jam', '5 km', '{"solo":200000,"group2_5":170000,"group6plus":150000}', 1, 'active'),
('puncak-pancar', 'Puncak Pancar', 'Puncak dengan panorama indah, trek menanjak.', 'Sulit', '6 jam', '8 km', '{"solo":250000,"group2_5":220000,"group6plus":200000}', 1, 'active'),
('curug-bidadari', 'Curug Bidadari', 'Air terjun ramah keluarga, area piknik.', 'Pemula', '2 jam', '2.5 km', '{"solo":150000,"group2_5":120000,"group6plus":100000}', 1, 'active'),
('sungai-ciesek', 'Sungai Ciesek', 'Trekking sungai, cocok untuk petualang.', 'Menengah', '3 jam', '4 km', '{"solo":180000,"group2_5":150000,"group6plus":130000}', 0, 'active'),
('bukit-alesano', 'Bukit Alesano', 'View panorama, sunrise spot.', 'Menengah', '4 jam', '5 km', '{"solo":200000,"group2_5":170000,"group6plus":150000}', 0, 'active'),
('curug-cigamea', 'Curug Cigamea', 'Multi-waterfall, trek menantang.', 'Sulit', '5 jam', '7 km', '{"solo":230000,"group2_5":200000,"group6plus":180000}', 0, 'active'),
('hutan-bambu-sentul', 'Hutan Bambu Sentul', 'Spot fotografi, trek ringan.', 'Pemula', '1.5 jam', '2 km', '{"solo":120000,"group2_5":100000,"group6plus":90000}', 0, 'active'),
('kawah-ratu', 'Kawah Ratu', 'Kawah vulkanik, trek berat.', 'Sulit', '7 jam', '10 km', '{"solo":270000,"group2_5":240000,"group6plus":220000}', 0, 'active'),
('air-terjun-kembar', 'Air Terjun Kembar', 'Twin falls, trek menengah.', 'Menengah', '3.5 jam', '4.5 km', '{"solo":180000,"group2_5":150000,"group6plus":130000}', 0, 'active');

-- Sample Data for atraksi
INSERT INTO atraksi (nama_atraksi) VALUES
('Air Terjun'),('Goa'),('Puncak'),('Sungai'),('Hutan'),('Panorama'),('Kawah');
