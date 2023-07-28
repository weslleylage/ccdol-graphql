const mongoose = require("mongoose");

const AeronaveSchema = mongoose.Schema({
    id_ocorrencia_a: Number,
    matricula: String,
    operador_categoria: String,
    tipo_veiculo: String,
    fabricante: String,
    modelo: String,
    motor_tipo: String,
    motor_quantidade: String,
    assentos: Number,
    ano_fabricacao: Number,
    pais_fabricante: String,
    registro_segmento: String,
    voo_origem: String,
    voo_destino: String,
    fase_operacao: String
});

module.exports = mongoose.model("Aeronave", AeronaveSchema);