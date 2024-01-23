const parseEnv = () => {
  const parsedEnvVars = Object.keys(process.env).filter((envVar) =>
    envVar.startsWith("RSS_")
  );
  const formattedEnvVars = parsedEnvVars
    .map((envVar) => `${envVar}=${process.env[envVar]}`)
    .join("; ");
  console.log(formattedEnvVars);
};

parseEnv();
