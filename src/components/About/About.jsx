import React, { Component } from "react";
import ImageModal from "../ImageModal";
import "./About.css";

export default class About extends Component {
  _mounted = false;

  state = {
    selectedImage: false
  };

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  handleClick = image => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: image
    });
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: false
    });
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div className="About--container">
        <h1 className="About--header">Lorem ipsum dolor sit amet</h1>
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}about_img01.jpg`}
          alt="about_img01"
          width="1280"
          height="720"
          className="image0"
          onClick={() =>
            this.handleClick(
              `${process.env.REACT_APP_IMAGES_URL}about_img01.jpg`
            )
          }
        />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt non
          aperiam praesentium voluptatum numquam dignissimos deleniti vel atque
          obcaecati excepturi sit, sed, tempora in, fuga consequuntur? Illum a
          ipsa ipsam sit. Adipisci quo incidunt vero eveniet harum hic, totam
          aut? Eveniet veritatis laudantium error. At eius libero minima
          molestias modi blanditiis nihil dolorem quia fugit, distinctio tempora
          eveniet vel et iste, delectus voluptatem facilis veritatis odio
          doloremque totam laborum quibusdam? Rerum doloribus sed temporibus
          culpa eius voluptates cum laudantium quisquam, corrupti excepturi
          saepe neque atque quasi praesentium, architecto doloremque repellat
          accusantium! Atque inventore error beatae laboriosam in modi fugiat
          vel. Facilis deleniti id modi nisi distinctio earum quos quidem
          consequuntur deserunt ullam voluptatibus tempore quis quia cupiditate
          quod dolore, voluptatem eum quas voluptate sequi at ad fuga? Ea nam
          sunt minus praesentium quidem distinctio aperiam consequuntur
          repellendus, itaque ut porro assumenda harum nemo voluptatem officiis
          dolor in, voluptates voluptatum?
        </p>
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}about_img02.jpg`}
          alt="about_img02"
          className="image1"
          onClick={() =>
            this.handleClick(
              `${process.env.REACT_APP_IMAGES_URL}about_img02.jpg`
            )
          }
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          recusandae corrupti dolores error itaque dolorem odio eum expedita
          ipsam a, inventore incidunt eaque mollitia hic velit assumenda quis
          cumque quo consectetur! Temporibus modi aliquam quas unde qui sit non
          maxime rerum! Beatae veritatis explicabo doloremque tempora corporis
          labore animi recusandae dicta veniam? In quos, ab deserunt nam
          temporibus qui nisi. Dolore praesentium repudiandae dolores error
          officiis vero, itaque illum optio, tenetur, possimus molestias
          delectus quam qui nesciunt in maiores natus perspiciatis sunt sint.
          Distinctio delectus autem animi magni? Assumenda nostrum cumque libero
          sapiente commodi aut nam tenetur magnam ullam veniam, exercitationem
          totam dolorum distinctio quos vel deleniti sunt corrupti
          necessitatibus dolor odio, natus facere? Iusto soluta ea optio
          voluptatibus. Quia fuga atque fugiat unde nostrum consectetur ipsum
          libero, iste odit, necessitatibus, doloribus deleniti! Eum aperiam nam
          officiis reprehenderit officia saepe fugiat. Voluptates ducimus cumque
          minima illum, rerum nihil fugit omnis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod velit
          eveniet natus veniam laborum. Accusantium vel similique cumque
          consectetur? Dicta dolorem aliquam explicabo doloribus rerum nemo est
          architecto reprehenderit cum illum magnam velit dignissimos beatae, et
          repellat accusamus, ut ea ratione voluptas harum tenetur distinctio?
          Deleniti officiis suscipit explicabo natus facilis atque cum, officia
          eaque, tenetur iusto quod pariatur illo, delectus quibusdam voluptate
          magnam sint. Nihil eligendi aliquam placeat ad at aperiam fugiat autem
          voluptatibus dolorem quis consectetur voluptatem nesciunt numquam
          excepturi ipsam minima, similique dignissimos adipisci? Facere,
          voluptates. Et earum minus excepturi sequi illo voluptates, inventore
          omnis quis in laudantium, esse perspiciatis, repellat tempore!
          Temporibus debitis eius ex excepturi ipsa nulla odio similique magnam
          possimus dolore! Quas tempore quae minima veniam id nihil ut quia nemo
          asperiores, ullam aspernatur. Pariatur quibusdam laborum eos aperiam
          architecto quaerat cupiditate, asperiores aliquid, amet dolorem
          dolorum nulla quisquam velit impedit magnam earum veniam voluptatem
          consequuntur est neque eligendi mollitia exercitationem sequi!
          Suscipit ea dolor facilis natus non at illum nobis rerum enim ullam
          temporibus labore dicta neque magnam nulla illo nemo ipsam excepturi
          optio accusantium commodi nisi aliquid, nesciunt blanditiis?
          Voluptatem placeat quod natus quaerat eius doloribus, corporis earum
          maxime, nam suscipit praesentium provident officia exercitationem
          voluptatibus sed consequatur impedit velit, incidunt dolores nulla ut
          vitae labore hic repellendus. Ullam libero, sunt in corrupti quae,
          quod tenetur explicabo veritatis dicta excepturi corporis rerum
          adipisci ipsum fuga laborum cumque unde facere quasi voluptatum quos
          accusantium. Quia non optio rem ea excepturi, dolorem velit repellat
          possimus temporibus repellendus quaerat natus laborum et consequatur
          pariatur! Beatae, incidunt rerum? Ducimus commodi suscipit esse sit
          totam, optio consequuntur soluta numquam incidunt ea enim nesciunt
          consectetur quia doloremque, voluptatem tempore deleniti! Architecto
          dolores alias ullam illo reiciendis in, ad facilis, numquam, impedit
          excepturi quae nemo deserunt iste voluptates magni. Quibusdam
          consectetur reiciendis voluptatum deleniti ducimus tenetur expedita
          nobis id praesentium voluptates nisi minima odit rem, perspiciatis
          facere! Accusamus neque dicta sit voluptatum veniam ea animi dolor,
          doloremque provident qui vero adipisci corporis nisi. Commodi eveniet
          necessitatibus, aut fugiat harum odit atque eaque dolorum! Repellat
          similique, placeat, ab quibusdam eveniet quod consequuntur iure
          necessitatibus labore delectus quam inventore fugiat debitis.
        </p>
        <img
          src={`${process.env.REACT_APP_IMAGES_URL}about_img03.jpg`}
          alt="about_img03"
          className="image2"
          onClick={() =>
            this.handleClick(
              `${process.env.REACT_APP_IMAGES_URL}about_img03.jpg`
            )
          }
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugiat, voluptates soluta dolore quod cupiditate quam architecto earum
          excepturi minus consequuntur delectus nam voluptatem. Placeat id
          inventore totam voluptas quibusdam officia, voluptate facere eum
          reiciendis fugiat et repellat similique laudantium vitae esse
          voluptatibus quidem? Ullam nisi omnis magni. Rerum voluptatibus eos
          perspiciatis ad consequuntur at in ut dolor voluptatem reprehenderit,
          dolorum odio aliquam doloribus fugit exercitationem suscipit commodi
          excepturi, nesciunt eius? Neque, similique sunt? Eum, quae! Porro
          laboriosam vero omnis, optio iste explicabo animi ex voluptatibus
          aspernatur libero pariatur non aliquid aliquam. Rem delectus nihil
          consequatur, labore et, autem, voluptate at deserunt ducimus beatae
          nam dolores blanditiis accusamus iste dignissimos nesciunt. Aut sint
          quod maiores temporibus consequuntur quaerat, quasi saepe rerum
          expedita eveniet pariatur fugiat tempora accusantium eos ullam dolore
          quisquam! Placeat veniam nam, quasi suscipit unde sit quibusdam sunt
          porro, eveniet, deleniti dolorum magni nulla ipsam veritatis
          dignissimos labore facilis? Deserunt inventore dicta, velit tempore
          numquam iste placeat nulla cum nam optio aperiam. Voluptatum unde illo
          quasi similique. Architecto eum laudantium maxime repellat recusandae
          sequi non corrupti sunt animi quod cum quo ut labore veniam iusto
          reprehenderit, perspiciatis similique, dolor aspernatur. Quaerat
          repudiandae quisquam velit ab consectetur laudantium deleniti, atque
          repellat, aliquid explicabo eos! Omnis nemo cumque voluptatem quae
          doloribus explicabo perspiciatis earum tempore. Laborum ducimus culpa
          esse consequuntur!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          recusandae corrupti dolores error itaque dolorem odio eum expedita
          ipsam a, inventore incidunt eaque mollitia hic velit assumenda quis
          cumque quo consectetur! Temporibus modi aliquam quas unde qui sit non
          maxime rerum! Beatae veritatis explicabo doloremque tempora corporis
          labore animi recusandae dicta veniam? In quos, ab deserunt nam
          temporibus qui nisi. Dolore praesentium repudiandae dolores error
          officiis vero, itaque illum optio, tenetur, possimus molestias
          delectus quam qui nesciunt in maiores natus perspiciatis sunt sint.
          Distinctio delectus autem animi magni? Assumenda nostrum cumque libero
          sapiente commodi aut nam tenetur magnam ullam veniam, exercitationem
          totam dolorum distinctio quos vel deleniti sunt corrupti
          necessitatibus dolor odio, natus facere? Iusto soluta ea optio
          voluptatibus. Quia fuga atque fugiat unde nostrum consectetur ipsum
          libero, iste odit, necessitatibus, doloribus deleniti! Eum aperiam nam
          officiis reprehenderit officia saepe fugiat. Voluptates ducimus cumque
          minima illum, rerum nihil fugit omnis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          recusandae corrupti dolores error itaque dolorem odio eum expedita
          ipsam a, inventore incidunt eaque mollitia hic velit assumenda quis
          cumque quo consectetur! Temporibus modi aliquam quas unde qui sit non
          maxime rerum! Beatae veritatis explicabo doloremque tempora corporis
          labore animi recusandae dicta veniam? In quos, ab deserunt nam
          temporibus qui nisi. Dolore praesentium repudiandae dolores error
          officiis vero, itaque illum optio, tenetur, possimus molestias
          delectus quam qui nesciunt in maiores natus perspiciatis sunt sint.
          Distinctio delectus autem animi magni? Assumenda nostrum cumque libero
          sapiente commodi aut nam tenetur magnam ullam veniam, exercitationem
          totam dolorum distinctio quos vel deleniti sunt corrupti
          necessitatibus dolor odio, natus facere? Iusto soluta ea optio
          voluptatibus. Quia fuga atque fugiat unde nostrum consectetur ipsum
          libero, iste odit, necessitatibus, doloribus deleniti! Eum aperiam nam
          officiis reprehenderit officia saepe fugiat. Voluptates ducimus cumque
          minima illum, rerum nihil fugit omnis.
        </p>
        {selectedImage && (
          <ImageModal image={selectedImage} onModalClose={this.onModalClose} />
        )}
      </div>
    );
  }
}
