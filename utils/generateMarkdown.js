

const avatar = `https://github.com/${data.username}.png?size=300`


function generateMarkdown(data) {
  return `
# User Name: ${data.username}  
# Email: ${data.email}  
# ${data.title}
# ${data.description}
# ${data.tableofcontents}
# ${data.instillation}
# ${data.usage}
# ${data.license}
# Contrubutors: ${data.Contributors}
# Have you tested your project? ${data.tests}

`;
}

module.exports = generateMarkdown;
