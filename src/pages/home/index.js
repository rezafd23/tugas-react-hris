import React, {Component} from "react"
import "../../assets/css/main.css"
import "../../assets/css/fontawesome-all.min.css"
import { Pie, Doughnut } from 'react-chartjs-2'
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataKaryawan: this.props.dataKaryawan, // get data dari redux
            jabatan: "", // state untuk jabatan dari componentdidmount
            statusPernikahan: "" // state untuk status pernikahan dari componentdidmount
        }
    }

    async componentDidMount() {
        let jabatan = []
        let statusPernikahan = []
        await this.props.dataKaryawan.forEach(element => {
            // jabatan.filter(data => console.log(data))
            if(!jabatan.includes(element.jabatan)){
                jabatan.push(element.jabatan)
            }else{
                jabatan = jabatan
            }
        })
        await this.props.dataKaryawan.forEach(element => {
            // jabatan.filter(data => console.log(data))
            if(!statusPernikahan.includes(element.statusPernikahan)){
                statusPernikahan.push(element.statusPernikahan)
            }else{
                statusPernikahan = statusPernikahan
            }
        })
        this.setState({
            jabatan,
            statusPernikahan
        })
    }

    // return data untuk chart pie
    dataPie = () => {
        const labels = this.state.jabatan
        let data =[]
        let backgroudColor = []
        if(labels){
            labels.forEach(element => {
                let count = this.state.dataKaryawan.filter(karyawan => karyawan.jabatan === element)
                data.push(count.length)
            });
        }
        for (let index = 0; index < data.length; index++) {
            backgroudColor.push(`rgba(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256}, 0.4)`) // random chart color           
        }
        return {
            labels: this.state.jabatan,
            datasets: [
            {
                label: 'Perbandingan Jabatan',
                data: data,
                backgroundColor: backgroudColor,
                borderWidth: 1,
            },
            ], 
        }
    }

    dataDoughnut = () => {
        const labels = this.state.statusPernikahan
        let data =[]
        let backgroudColor = []
        if(labels){
            labels.forEach(element => {
                let count = this.state.dataKaryawan.filter(karyawan => karyawan.statusPernikahan === element)
                data.push(count.length)
            });
        }
        for (let index = 0; index < data.length; index++) {
            backgroudColor.push(`rgba(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256}, 0.4)`) // random chart color           
        }
        return {
            labels: this.state.statusPernikahan,
            datasets: [
            {
                label: 'Perbandingan Status Pernikahan',
                data: data,
                backgroundColor: backgroudColor,
                borderWidth: 1,
            },
            ], 
        }
    }

    render() {
        console.log(this.state.statusPernikahan);
        return <>
            <div className="inner">
                <header id="header" style={{display: "block"}}>
                    <h1 style={{display: "inline"}}>HRIS</h1> <span>(Human Resouce Information System)</span>
                </header>
                <section>
                    <div className="features">
                        <article>
                            <div className="card">
                                <div className="card-header text-center">Perbandingan Jabatan</div>
                                <div className="card-body">
                                    <Pie data={this.dataPie()} />
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="card">
                                <div className="card-header text-center">Perbandingan Status Pernikahan</div>
                                <div className="card-body">
                                    <Doughnut data={this.dataDoughnut()} />
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </>
    }
}

const mapStateToProps = state => ({
    dataKaryawan : state.presensi.dataKaryawan
})


export default connect(mapStateToProps)(Home)