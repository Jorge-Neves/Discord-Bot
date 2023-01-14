const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping2')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    console.log('ping2');
    await interaction.reply('Pong!2');
  },
};
