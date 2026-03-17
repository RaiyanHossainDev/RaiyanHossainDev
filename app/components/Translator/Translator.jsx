'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const Translator = ({ english, bangla }) => {
  // Get current language from Redux
  const lang = useSelector((state) => state.translator.language) || 'en';

  // Pick the correct text
  const text = lang === 'en' ? english : bangla;

  return <span>{text}</span>;
};

export default Translator;