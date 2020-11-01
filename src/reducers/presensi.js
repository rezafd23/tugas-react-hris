

const initialState = {
    presensi: [
        {
            nik: "20201005",
            tanggal: "31/10/2020",
            jam: "08:00",
            statusPresensi: "Masuk"
        },
        {
            nik: "20201005",
            tanggal: "31/10/2020",
            jam: "15:38",
            statusPresensi: "Pulang"
        }
    ],
    dataKaryawan: [
        {
          "id": 1,
          "nik": "20201005",
          "jabatan": "Aplication Owner",
          "noktp": "3275101010102020",
          "nama": "Jono Sujono",
          "email": "jonosujono@mail.btpns.com",
          "password": "123mantap",
          "tglLahir": "20 mei 1997",
          "tempatLahir": "jakarta",
          "alamat": "bintara, bekasi barat",
          "noTelp": "082120201010",
          "pendidikanTerkahir": "S1 Sistem Informasi",
          "institusiPendidikan": "Institut 20 November",
          "statusPernikahan": "Lajang"
        },
        {
          "id": 2,
          "nik": "20201002",
          "jabatan": "Aplication Owner",
          "noktp": "3575202020201010",
          "nama": "James Bond",
          "email": "jamesbond@mail.btpns.com",
          "password": "agentbond007",
          "tglLahir": "8 april 1976",
          "tempatLahir": "jakarta",
          "alamat": "menteng, jakarta pusat",
          "notelp": "088833333007",
          "pendidikanTerkahir": "S1 Sistem Informasi",
          "institusiPendidikan": "Institut Teknologi Bekasi",
          "statusPernikahan": "Lajang"
        },
        {
          "id": 3,
          "nik": "20201001",
          "jabatan": "HC Lead",
          "noktp": "3622129755612929",
          "nama": "Nissa Sabyan",
          "email": "nissa_imutz@mail.btpns.com",
          "password": "nissacantik",
          "tglLahir": "5 juli 1999",
          "tempatLahir": "jakarta",
          "alamat": "ciputat, tangerang ",
          "notelp": "087783899565",
          "pendidikanTerkahir": "S1 Psikologi",
          "institusiPendidikan": "Universitas Negeri Syarif Hidayatulah",
          "statusPernikahan": "Menikah"
        },
        {
          "id": 4,
          "nik": "20201003",
          "jabatan": "Aplication Owner",
          "noktp": "3472199779916666",
          "nama": "Naruto Uzumaki",
          "email": "hokage6@mail.btpns.com",
          "password": "konohagakure",
          "tglLahir": "31 juni 1988",
          "tempatLahir": "jakarta",
          "alamat": "padalarang, bandung",
          "notelp": "082177881818",
          "pendidikanTerkahir": "S1 Teknik Informatika",
          "institusiPendidikan": "Universitas Negeri Api",
          "statusPernikahan": "Menikah"
        },
        {
          "id": 5,
          "nik": "20201004",
          "jabatan": "IT PMO",
          "noktp": "3356199574913641",
          "nama": "Ismail bin Mail",
          "email": "mail_ismail@mail.btpns.com",
          "password": "ayamgoreng2ringgit",
          "tglLahir": "31 Agustus 1998",
          "tempatLahir": "Kuala Lumpur",
          "alamat": "setiabudi, bandung",
          "notelp": "082232557622",
          "pendidikanTerkahir": "S1 Teknik Informatika",
          "institusiPendidikan": "Universitas Negeri Malaysia",
          "statusPernikahan": "Lajang"
        }
      ]
}
const presensiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updatePresensi":
            return {
                ...state,
                presensi : action.payload
            }
        default:
            return state
    }
}

export default presensiReducer