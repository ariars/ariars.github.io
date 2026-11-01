# _posts 폴더 안에 글과 함께 넣어 둔 이미지·동영상 등의 정적 파일을
# 사이트에 복사해 주는 플러그인입니다.
#
# Jekyll은 기본적으로 `_posts` 안의 이미지를 사이트로 복사하지 않기 때문에,
# 이 플러그인이 아래 규칙으로 경로를 만들어 복사합니다.
#
#   _posts/<하위 경로>/<파일명>  →  /blog/<하위 경로>/<파일명>
#
#   예) _posts/azure/entraid/asset/cover.svg  →  /blog/azure/entraid/asset/cover.svg
#       _posts/life/images/1.jpg              →  /blog/life/images/1.jpg

module Jekyll
  # 원본은 _posts 안에 두고, 결과물은 /blog/... 경로에 쓰는 정적 파일
  class PostAssetFile < StaticFile
    def initialize(site, base, dir, name, dest_dir)
      super(site, base, dir, name)
      @dest_dir = dest_dir
    end

    def url
      File.join("", @dest_dir, @name)
    end

    def destination(dest)
      @site.in_dest_dir(dest, File.join(@dest_dir, @name))
    end
  end

  class PostAssetGenerator < Generator
    safe true
    priority :low

    # 복사할 파일 확장자
    ASSET_EXTENSIONS = %w(
      .png .jpg .jpeg .gif .svg .webp .avif .ico
      .mp4 .webm .mp3 .pdf .zip
    ).freeze

    # 결과물 경로의 시작 폴더 (글 주소 /blog/... 와 맞춤)
    OUTPUT_PREFIX = "blog".freeze

    def generate(site)
      posts_dir = File.join(site.source, "_posts").tr("\\", "/")
      return unless Dir.exist?(posts_dir)

      Dir.glob(File.join(posts_dir, "**", "*")).each do |path|
        next unless File.file?(path)
        next unless ASSET_EXTENSIONS.include?(File.extname(path).downcase)

        rel_dir = File.dirname(path).tr("\\", "/").sub(posts_dir, "").sub(%r!\A/!, "")

        site.static_files << PostAssetFile.new(
          site,
          site.source,
          File.join("_posts", rel_dir),
          File.basename(path),
          File.join(OUTPUT_PREFIX, rel_dir)
        )
      end
    end
  end
end
