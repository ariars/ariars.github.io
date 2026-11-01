source "https://rubygems.org"

# github-pages gem은 _plugins 폴더의 사용자 플러그인을 막기 때문에
# 같은 버전의 Jekyll을 직접 사용합니다. (github-pages 232 = Jekyll 3.10)
gem "jekyll", "~> 3.10"
gem "kramdown-parser-gfm", "~> 1.1"
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows 환경 지원
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
