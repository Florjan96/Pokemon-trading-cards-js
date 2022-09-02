const data = [
  {
    name: "bulbasaur",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 153,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 153,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 153,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 1,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 1
  },
  {
    name: "ivysaur",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/2.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/2.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/2.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/2.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/2.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/2.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/2.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/2.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/2.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/2.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/2.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/2.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/2.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/2.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/2.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/2.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/2.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/2.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/2.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/2.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/2.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/2.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/2.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/2.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/2.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/2.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/2.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/2.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/2.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/2.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/2.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/2.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/2.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/2.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/2.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/2.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 62,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 9,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 2,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 2
  },
  {
    name: "venusaur",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/3.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/3.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/3.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/3.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/3.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/3.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/3.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/3.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/3.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/3.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/3.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/3.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/3.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/3.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/3.png"
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/3.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/3.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/3.png"
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/3.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/3.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/3.png"
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/3.gif",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/3.gif",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/3.gif",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/3.gif",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/3.gif",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/3.gif"
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/3.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/3.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/3.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/3.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/3.png"
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/3.png"
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/3.png"
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/3.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/3.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/3.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/3.png"
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/3.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 82,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 154,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 154,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 154,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 3,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 3
  },
  {
    name: "charmander",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/4.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/4.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/4.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/4.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/4.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/4.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/4.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/4.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/4.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/4.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/4.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/4.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/4.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/4.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/4.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/4.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/4.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/4.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/4.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/4.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/4.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/4.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/4.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/4.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/4.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/4.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/4.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/4.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/4.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/4.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/4.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/4.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/4.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/4.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/4.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/4.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/4.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 39,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 176,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 176,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 176,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 4,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 4
  },
  {
    name: "charmeleon",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/5.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/5.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/5.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/5.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/5.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/5.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/5.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/5.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/5.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/5.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/5.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/5.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/5.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/5.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/5.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/5.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/5.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/5.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/5.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/5.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/5.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/5.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/5.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/5.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/5.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/5.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/5.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/5.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/5.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/5.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/5.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/5.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/5.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/5.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/5.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/5.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/5.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/5.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/5.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 178,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 178,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 178,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 5,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 5
  },
  {
    name: "charizard",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/6.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/6.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/6.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/6.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/6.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/6.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/6.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/6.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/6.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/6.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/6.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/6.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/6.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/6.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/6.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/6.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/6.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/6.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/6.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/6.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/6.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/6.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/6.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/6.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/6.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/6.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/6.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/6.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/6.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/6.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/6.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/6.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/6.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/6.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/6.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/6.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/6.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 84,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 180,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 180,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 180,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 6,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 6
  },
  {
    name: "squirtle",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/7.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/7.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/7.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/7.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/7.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/7.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/7.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/7.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/7.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/7.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/7.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/7.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/7.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/7.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/7.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/7.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/7.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/7.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/7.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/7.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/7.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/7.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/7.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/7.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/7.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/7.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/7.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/7.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/7.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/7.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/7.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/7.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/7.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/7.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/7.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 44,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 177,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 177,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 177,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 7,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 7
  },
  {
    name: "wartortle",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/8.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/8.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/8.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/8.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/8.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/8.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/8.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/8.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/8.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/8.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/8.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/8.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/8.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/8.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/8.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/8.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/8.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/8.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/8.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/8.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/8.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/8.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/8.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/8.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/8.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/8.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/8.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/8.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/8.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/8.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/8.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/8.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/8.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/8.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/8.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/8.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/8.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/8.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/8.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 59,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 179,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 179,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 179,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 8,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 8
  },
  {
    name: "blastoise",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/9.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/9.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/9.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/9.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/9.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/9.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/9.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/9.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/9.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/9.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/9.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/9.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/9.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/9.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/9.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/9.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/9.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/9.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/9.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/9.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/9.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/9.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/9.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/9.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/9.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/9.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/9.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/9.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/9.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/9.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/9.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/9.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/9.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/9.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/9.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/9.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/9.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/9.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/9.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/9.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 79,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 105,
        effort: 3,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 28,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 28,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 28,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 9,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 9
  },
  {
    name: "caterpie",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/10.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/10.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/10.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/10.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/10.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/10.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/10.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/10.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/10.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/10.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/10.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/10.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/10.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/10.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/10.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/10.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/10.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/10.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/10.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/10.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/10.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/10.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/10.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/10.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/10.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/10.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/10.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/10.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/10.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/10.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/10.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/10.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/10.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/10.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/10.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/10.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/10.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/10.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/10.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/10.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 45,
        effort: 1,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 123,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 123,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 123,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 10,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 10
  },
  {
    name: "metapod",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/11.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/11.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/11.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/11.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/11.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/11.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/11.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/11.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/11.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/11.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/11.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/11.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/11.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/11.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/11.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/11.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/11.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/11.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/11.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/11.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/11.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/11.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/11.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/11.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/11.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/11.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/11.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/11.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/11.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/11.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/11.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/11.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/11.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/11.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/11.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/11.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/11.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/11.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/11.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/11.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 55,
        effort: 2,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 124,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 124,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 124,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 11,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 11
  },
  {
    name: "butterfree",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/12.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/12.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/12.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/12.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/12.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/12.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/12.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/12.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/12.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/12.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/12.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/12.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/12.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/12.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/12.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/12.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/12.png"
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/12.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/12.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/12.png"
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/12.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/12.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/12.png"
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/12.gif",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/12.gif",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/12.gif",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/12.gif",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/12.gif",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/12.gif",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/12.gif"
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/12.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/12.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/12.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/12.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/12.png"
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/12.png"
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/12.png"
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/12.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/12.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/12.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/12.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/12.png"
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/12.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 125,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 125,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 125,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 12,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 12
  },
  {
    name: "weedle",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/13.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/13.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/13.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/13.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/13.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/13.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/13.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/13.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/13.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/13.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/13.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/13.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/13.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/13.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/13.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/13.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/13.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/13.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/13.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/13.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/13.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/13.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/13.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/13.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/13.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/13.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/13.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/13.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/13.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/13.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/13.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/13.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/13.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/13.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/13.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/13.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/13.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/13.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/13.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/13.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/13.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 50,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 112,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 112,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 112,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 13,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 13
  },
  {
    name: "kakuna",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/14.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/14.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/14.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/14.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/14.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/14.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/14.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/14.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/14.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/14.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/14.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/14.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/14.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/14.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/14.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/14.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/14.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/14.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/14.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/14.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/14.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/14.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/14.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/14.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/14.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/14.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/14.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/14.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/14.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/14.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/14.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/14.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/14.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/14.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/14.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/14.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/14.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/14.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/14.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/14.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/14.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 50,
        effort: 2,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 113,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 113,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 113,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 14,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 14
  },
  {
    name: "beedrill",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/15.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/15.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/15.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/15.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/15.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/15.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/15.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/15.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/15.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/15.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/15.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/15.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/15.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/15.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/15.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/15.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/15.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/15.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/15.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/15.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/15.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/15.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/15.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/15.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/15.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/15.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/15.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/15.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/15.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/15.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/15.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/15.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/15.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/15.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/15.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/15.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/15.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/15.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/15.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/15.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 114,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 114,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 114,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 15,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 15
  },
  {
    name: "pidgey",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/16.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/16.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/16.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/16.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/16.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/16.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/16.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/16.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/16.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/16.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/16.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/16.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/16.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/16.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/16.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/16.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/16.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/16.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/16.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/16.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/16.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/16.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/16.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/16.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/16.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/16.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/16.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/16.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/16.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/16.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/16.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/16.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/16.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/16.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/16.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/16.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/16.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/16.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/16.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/16.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 56,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 36,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 36,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 36,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 16,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 16
  },
  {
    name: "pidgeotto",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/17.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/17.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/17.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/17.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/17.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/17.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/17.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/17.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/17.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/17.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/17.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/17.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/17.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/17.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/17.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/17.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/17.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/17.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/17.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/17.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/17.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/17.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/17.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/17.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/17.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/17.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/17.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/17.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/17.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/17.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/17.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/17.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/17.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/17.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/17.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/17.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/17.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/17.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/17.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/17.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 63,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 71,
        effort: 2,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 150,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 150,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 150,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 17,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 17
  },
  {
    name: "pidgeot",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/18.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/18.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/18.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/18.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/18.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/18.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/18.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/18.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/18.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/18.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/18.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/18.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/18.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/18.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/18.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/18.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/18.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/18.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/18.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/18.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/18.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/18.png",
            front_shiny_female: null
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/18.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/18.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/18.png",
            front_shiny_female: null
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/18.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/18.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/18.png",
            front_shiny_female: null
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/18.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/18.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/18.gif",
              front_shiny_female: null
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/18.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/18.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/18.png",
            front_shiny_female: null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/18.png",
            front_shiny_female: null
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/18.png",
            front_shiny_female: null
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/18.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/18.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/18.png",
            front_shiny_female: null
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/18.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 83,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 80,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 101,
        effort: 3,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 151,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 151,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 151,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 18,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 18
  },
  {
    name: "rattata",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/19.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/19.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/19.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/19.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/19.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/19.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/19.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/19.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/19.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/19.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/19.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/19.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/19.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/19.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/19.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/19.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/19.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/19.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/19.png"
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/19.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/19.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/19.png"
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/19.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/19.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/19.png"
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/19.gif",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/19.gif",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/19.gif",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/19.gif",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/19.gif",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/19.gif",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/19.gif"
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/19.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/19.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/19.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/19.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/19.png"
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/19.png"
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/19.png"
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/19.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/19.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/19.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/19.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/19.png"
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/19.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 56,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 72,
        effort: 1,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 165,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 165,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 165,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 19,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 19
  },
  {
    name: "raticate",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
          front_female: null
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
        }
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/20.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/20.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/20.png"
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/20.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/20.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/20.png"
          }
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/20.png"
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/20.png"
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/20.png"
          }
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/20.png"
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/20.png"
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/20.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/20.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/20.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/20.png"
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/20.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/20.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/20.png"
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/20.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/20.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/20.png"
          }
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/20.gif",
              back_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/20.gif",
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/20.gif",
              back_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/20.gif",
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
              front_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/20.gif",
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/20.gif",
              front_shiny_female:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/20.gif"
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/20.png",
            back_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/20.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/20.png",
            back_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/20.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/20.png"
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/20.png"
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/20.png"
          }
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/20.png",
            front_female: null
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/20.png",
            front_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/20.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/20.png",
            front_shiny_female:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/20.png"
          }
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/20.png",
            front_female: null
          }
        }
      }
    },
    stats: [
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        base_stat: 81,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        base_stat: 97,
        effort: 2,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    game_indices: [
      {
        game_index: 166,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 166,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 166,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 20,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    id: 20
  }
];

window.data = data;
