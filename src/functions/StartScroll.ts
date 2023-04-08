export default function StartScroll() {
  const animeRef = document.getElementById('anime_ref') as HTMLDivElement;
  const sq1Ref = document.getElementById('sq1') as HTMLDivElement;
  const sq2Ref = document.getElementById('sq2') as HTMLDivElement;
  const myIntroContent = document.getElementById(
    'introContent'
  ) as HTMLDivElement;

  window.onscroll = () => {
    if (window.scrollY > 0) {
      animeRef.style.transform = 'translate(' + 70 + '%,' + -50 + '%)';
      sq1Ref.style.width = '100%';
      sq2Ref.style.width = '0%';
      myIntroContent.classList.add('active');
    } else {
      myIntroContent.classList.remove('active');
      animeRef.style.transform = 'translate(' + 50 + '%,' + -50 + '%)';
      sq1Ref.style.width = '50%';
      sq2Ref.style.width = '50%';
    }
  };
}
