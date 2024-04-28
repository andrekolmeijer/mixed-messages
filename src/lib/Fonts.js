async function load() {
  const plexMonoRegular = new FontFace('IBM Plex Mono', 'url(src/assets/fonts/IBMPlexMono-Regular.woff2) format(woff2)', {
    weight: 400,
    style: 'normal',
    display: 'swap'
  });
  const plexMonoSemiBold = new FontFace('IBM Plex Mono', 'url(src/assets/fonts/IBMPlexMono-SemiBold.woff2) format(woff2)', {
    weight: 600,
    style: 'normal',
    display: 'swap'
  });
  const openSansVariable = new FontFace('Open Sans', 'url(src/assets/fonts/OpenSans-VariableFont.woff2) format("woff2-variations")', {
    weight: '300 800',
    style: 'normal',
    display: 'swap'
  });

  await plexMonoRegular.load();
  await plexMonoSemiBold.load();
  await openSansVariable.load();

  document.fonts.add(plexMonoRegular);
  document.fonts.add(plexMonoSemiBold);
  document.fonts.add(openSansVariable);
}

load();
