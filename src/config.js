const getConfig = () => {
  return {
    API_BASE_URL:
      import.meta.env.MODE === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : window.location.origin,
  };
};

export default { ...getConfig() };
