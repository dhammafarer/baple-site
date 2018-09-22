import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/products-styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface Param {
  key: string
  value: string
}

interface Spec {
  name: string
  params: Array<Param>
}
interface Product {
  classes: any
  heading: string
  text: string
  mainImg: Image
  spec: Array<Spec>
}

interface Props {
  classes: any
  products: Array<Product>
}


const ProductsList: React.SFC<Props> = ({ products, classes }) => (
  <section className={classes.section}>
    {
      products.map(x =>
        <Card key={x.heading} className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography variant="title">
                {x.heading}
              </Typography>
            }
          />
          <CardContent className={classes.cardContent}>
            <Grid container>
              <Grid item md={3}>
                <img src={x.mainImg.childImageSharp.sizes.src}/>
              </Grid>
              <Grid item md={9}>
                {
                  x.spec.map((s, j) =>
                    <div key={j}>
                      <Typography variant="caption">
                        {s.name}
                      </Typography>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Parameter
                            </TableCell>
                            <TableCell>
                              Value
                            </TableCell>
                          </TableRow>
                        </TableHead>
                          {
                            s.params.map((c, k) =>
                              <TableRow key={k}>
                                <TableCell>
                                  {c.key}
                                </TableCell>
                                <TableCell>
                                  {c.value}
                                </TableCell>
                              </TableRow>
                            )
                          }
                        <TableBody>
                        </TableBody>
                      </Table>
                    </div>
                  )
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )
    }
  </section>
);

export default withStyles(styles)(ProductsList);

export const ProductsFragment = graphql`
  fragment ProductsYaml on PagesYaml {
    products {
      heading
      text
      mainImg {
        childImageSharp {
          sizes(maxWidth: 800) {
            src
          }
        }
      }
      spec {
        name
        params {
          key
          value
        }
      }
    }
  }
`;
