# Ariar's Blog

GitHub Pages + Cayman 테마 기반 블로그입니다.

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 으로 확인할 수 있습니다.

## 배포

GitHub 저장소에 push하면 GitHub Pages에서 자동으로 사이트가 빌드됩니다.

- 저장소 이름: `ariars.github.io`
- 브랜치: `main`
- GitHub Pages 설정: Build and deployment = GitHub Actions 또는 기존 Jekyll
