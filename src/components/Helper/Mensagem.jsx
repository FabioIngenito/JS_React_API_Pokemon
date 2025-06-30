import React from 'react';

const Mensagem = ({ mensagem }) => {
  if (!mensagem) return null;

  return <p className="text-gray-400">{mensagem}</p>;
};

export default Mensagem;
