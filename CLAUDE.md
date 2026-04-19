# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an **mdBook documentation project** containing comprehensive deep learning notes in Chinese. The repository uses mdBook with mermaid diagrams support and MathJax for mathematical notation.

## Build Commands

```bash
# Install mdbook (requires Rust/Cargo)
cargo install mdbook
cargo install mdbook-mermaid

# Build the book
mdbook build

# Serve with live reload during development
mdbook serve
```

## Project Structure

```
DeepLearningNotes/
├── book.toml               # mdBook config (preprocessors, output settings)
├── src/
│   ├── SUMMARY.md          # Table of contents (defines book structure)
│   ├── README.md           # Introduction
│   └── <topic>/            # Topic directories (CV, NLP, RL, GAN, etc.)
│       ├── *.md            # Chapter markdown files
│       └── subtopic/       # Nested topic folders
├── theme/                  # Custom theme (pagetoc, mermaid, index.hbs)
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment on push to main
└── book/                   # Built output directory (generated)
```

## Content Organization

Notes are organized by topic area:

| Directory | Topic |
|-----------|-------|
| `src/CV/` | Computer Vision (detection, recognition, style transfer) |
| `src/NLP/` | Natural Language Processing (embeddings, language models) |
| `src/RL/` | Reinforcement Learning (policy gradient, Q-learning, A3C) |
| `src/GAN/` | Generative Adversarial Networks |
| `src/CaseStudy/` | Classic architectures (ResNet, Inception, Seq2Seq, Attention) |
| `src/Audio/` | Speech recognition, trigger word detection |
| `src/Common/` | General concepts (AutoEncoder, Zero Shot) |
| `src/1209400866/` | Advanced topics (anomaly detection, adversarial attack, meta learning) |

## Key Configuration

**book.toml**:
- `mathjax-support = true` - Mathematical notation with MathJax
- `[preprocessor.mermaid]` - Mermaid diagram support
- `additional-css` / `additional-js` - Custom theme files

**Theme Files** (in `theme/`):
- `pagetoc.css` / `pagetoc.js` - Page table of contents sidebar
- `mermaid-init.js` / `mermaid.min.js` - Mermaid diagram rendering
- `index.hbs` - Custom HTML template with sidetoc

**CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `main`.

## Adding New Content

1. Create markdown file in `src/<topic>/` directory
2. Add entry to `src/SUMMARY.md` (required for mdBook to include it)
3. Commit and push to `main` for auto-deployment

## Assets

- Images are stored in `assets/` at root or topic-specific `src/<topic>/assets/` subdirectories
- Referenced in markdown using relative paths

## Migration from GitBook

This project was migrated from GitBook to mdBook. Key changes:
- `book.json` → `book.toml`
- `SUMMARY.md` moved to `src/SUMMARY.md`
- All content moved to `src/` directory
- Travis CI → GitHub Actions
- KaTeX → MathJax
- Custom theme files in `theme/` directory
